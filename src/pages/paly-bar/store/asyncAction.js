import { createAsyncThunk } from '@reduxjs/toolkit'

import {getSongDetail} from "@/services/player"

const AsyncgetSongDetail = createAsyncThunk(
  'recommend/getSongDetail',
  async (id) => {
    const res = await getSongDetail(id)
    console.log(res)
    return res.songs[0]
  }
)

export {
  AsyncgetSongDetail
}
