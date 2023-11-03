import { Tariff } from '@/types/api'

export const getMinMaxStudyDurationFromTariffs = (tariffs: Tariff[]) => {
  const studyDurations = tariffs.map((tariff) => tariff.study_duration)
  if (!studyDurations.length) return [0, 0]

  const minStudyDuration = Math.min(...studyDurations)
  const maxStudyDuration = Math.max(...studyDurations)

  return [minStudyDuration, maxStudyDuration]
}
