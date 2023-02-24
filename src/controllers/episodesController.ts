import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { AuthenticatedRequest } from "../middlewares/auth";
import { episodeService } from "../services/episodeService";

export const episodesController = {
    //GET /episodes/stream?videoUrl=
    stream: async (req: Request, res: Response) => {
        const { videoUrl } = req.query

        try {
            
            if(typeof videoUrl !== "string") throw new Error('videoUrl needs to be a string')

            const range = req.headers.range

            episodeService.streamEpisodes(res, videoUrl, range)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
        }
    }
},
    // GET episode/:id/watchtime
    getWatchTime:async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const episodeId = req.params.id

        try {
            const watchTime = await episodeService.getWatchTime(userId, Number(episodeId))
            return res.json(watchTime)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
        }
        }
    },


    // GET episode/:id/watchtime
    setWatchTime:async (req: AuthenticatedRequest, res: Response) => {
        const userId = req.user!.id
        const episodeId = Number(req.params.id)
        const { seconds } = req.body

        try {
            const watchTime = await episodeService.setWatchTime({
                userId,
                episodeId,
                seconds
            })
            return res.json(watchTime)

        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({message: err.message})
        }
        }
    }
}