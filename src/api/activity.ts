import {
    get,
    post
} from '@/utils/http'

export const getActivity = (params?: object) => {
    return get(`account/activity/activity_list/`, params)
}