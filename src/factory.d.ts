type Translation = string | (value: number, seconds: number) => string;

type RelativeDateTranslations = {
  justNow: Translation;
  secondsAgo: Translation;
  aMinuteAgo: Translation;
  minutesAgo: Translation;
  anHourAgo: Translation;
  hoursAgo: Translation;
  aDayAgo: Translation;
  daysAgo: Translation;
  aWeekAgo: Translation;
  weeksAgo: Translation;
  aMonthAgo: Translation;
  monthsAgo: Translation;
  aYearAgo: Translation;
  yearsAgo: Translation;
  overAYearAgo: Translation;
  secondsFromNow: Translation;
  aMinuteFromNow: Translation;
  minutesFromNow: Translation;
  anHourFromNow: Translation;
  hoursFromNow: Translation;
  aDayFromNow: Translation;
  daysFromNow: Translation;
  aWeekFromNow: Translation;
  weeksFromNow: Translation;
  aMonthFromNow: Translation;
  monthsFromNow: Translation;
  aYearFromNow: Translation;
  yearsFromNow: Translation;
  overAYearFromNow: Translation;
};

export default function relativeDateFactory(
  translations: RelativeDateTranslations
): (date: Date, now?: Date) => string;
