import { Response } from "express";
import path from "path";
import fs from 'fs'

export const episodeService = {

    streamEpisodes: (res: Response, videoUrl: string, range: string | undefined) => {
        const filePath = path.join(__dirname, '..', '..', 'uploads', videoUrl)
        const fileState = fs.statSync(filePath)

       
        if(range){
            
            const parts = range.replace('/bites=/', '').split('-')

            const start = parseInt(parts[0], 10)
            const end = parts[1] ? parseInt(parts[1], 10) : fileState.size - 1

            const chunkSize = (end - start) + 1

            const file = fs.createReadStream(filePath, {start, end})

            const head = {
                'Content-Range': `bytes ${start}-${end}/${fileState.size}`,
                'Accept-Ranges': 'bytes',
                'Content-Length': chunkSize,
                'Content-Type': 'video/mp4',
              }
      
              res.writeHead(206, head)
      
              file.pipe(res)
        }else{
            const head = {
            'Content-Length': fileState.size,
            'Content-Type': 'video/mp4',
          }
  
          res.writeHead(200, head)
  
          fs.createReadStream(filePath).pipe(res)}
    }

}