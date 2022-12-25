import {createAction} from 'typesafe-actions'
import {Track} from './types'

export const actionTracksRequest = createAction('TRACKS_REQUEST')()
export const actionTracksResponse = createAction('TRACKS_RESPONSE')<Track[]>()
export const actionTracksResponseError = createAction('TRACKS_RESPONSE_ERROR')<string>()

export const actionTrackUpdate = createAction('TRACK_UPDATE')<Track>()
