export default function formatDateTime(rawDate, rawTime) {
    const date = rawDate.split('')
    const time = rawTime.split('')

    date[3] += "-"
    date[5] += "-"

    time[1] += ":"
    time[3] += ":"

    return {
        date: date,
        time: time
    }
}