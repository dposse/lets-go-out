import express, { Request, Response } from "express";
const router = express.Router();

router.get('/current-time', (req: Request, res: Response) => {
  const unixTime = new Date().getTime();
  res.json({ time: unixTime });
});

module.exports = router;