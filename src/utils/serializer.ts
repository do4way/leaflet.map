export const stringifyObjs = (objs?: any[] | any) => {
    if (!objs) return ['']
    const targets = Array.isArray(objs) ? objs : [objs]
    return targets.map((t) =>
        typeof t === 'object' ? JSON.stringify(t) : t.toString(),
    )
}
