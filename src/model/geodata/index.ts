import { APIException } from '../error'
export type DistrictsId = 'yokohama' | 'kawasaki'
export const getDistrict = async (id: DistrictsId) => {
    const response = await fetch(
        '/api/districts' +
            new URLSearchParams({
                id,
            }),
    )
    if (response.status !== 200) {
        throw new APIException(response.status as any, response.json())
    }
    return response.json()
}
