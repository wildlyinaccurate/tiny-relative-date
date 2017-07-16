import relativeDate from '../src/index'
import relativeDateFactory from '../src/factory'
import enShortTranslations from '../translations/en-short'
import deTranslations from '../translations/de'

const NOW = new Date('2017-09-07T12:00:00Z')

describe('tiny-relative-date', () => {

  describe('Main module with default locale', () => {
    it('Uses the "en" locale by default', () => {
      expect(relativeDate(NOW, NOW)).toEqual('just now')
    })

    it('Returns the correct relative string for past dates', () => {
      expect(relativeDate(NOW, NOW)).toEqual('just now')
      expect(relativeDate('2017-09-07T11:59:31Z', NOW)).toEqual('just now')
      expect(relativeDate('2017-09-07T11:59:29Z', NOW)).toEqual('31 seconds ago')
      expect(relativeDate('2017-09-07T11:59:01Z', NOW)).toEqual('59 seconds ago')
      expect(relativeDate('2017-09-07T11:59:00Z', NOW)).toEqual('a minute ago')
      expect(relativeDate('2017-09-07T11:58:01Z', NOW)).toEqual('a minute ago')
      expect(relativeDate('2017-09-07T11:58:00Z', NOW)).toEqual('2 minutes ago')
      expect(relativeDate('2017-09-07T11:00:01Z', NOW)).toEqual('59 minutes ago')
      expect(relativeDate('2017-09-07T11:00:00Z', NOW)).toEqual('an hour ago')
      expect(relativeDate('2017-09-07T10:00:01Z', NOW)).toEqual('an hour ago')
      expect(relativeDate('2017-09-07T10:00:00Z', NOW)).toEqual('2 hours ago')
      expect(relativeDate('2017-09-06T12:00:01Z', NOW)).toEqual('23 hours ago')
      expect(relativeDate('2017-09-06T12:00:00Z', NOW)).toEqual('yesterday')
      expect(relativeDate('2017-09-06T00:00:00Z', NOW)).toEqual('yesterday')
      expect(relativeDate('2017-09-05T22:59:59Z', NOW)).toEqual('2 days ago')
      expect(relativeDate('2017-09-01', NOW)).toEqual('6 days ago')
      expect(relativeDate('2017-08-31', NOW)).toEqual('a week ago')
      expect(relativeDate('2017-08-09', NOW)).toEqual('4 weeks ago')
      expect(relativeDate('2017-08-08', NOW)).toEqual('a month ago')
      expect(relativeDate('2017-03-01', NOW)).toEqual('6 months ago')
      expect(relativeDate('2016-09-07', NOW)).toEqual('a year ago')
      expect(relativeDate('2016-04-07', NOW)).toEqual('a year ago')
      expect(relativeDate('2015-04-07', NOW)).toEqual('over a year ago')
    })

    it('Returns the correct relative string for future dates', () => {
      expect(relativeDate('2017-09-07T12:00:31Z', NOW)).toEqual('31 seconds from now')
      expect(relativeDate('2017-09-07T12:00:59Z', NOW)).toEqual('59 seconds from now')
      expect(relativeDate('2017-09-07T12:01:00Z', NOW)).toEqual('a minute from now')
      expect(relativeDate('2017-09-07T12:01:01Z', NOW)).toEqual('a minute from now')
      expect(relativeDate('2017-09-07T12:02:00Z', NOW)).toEqual('2 minutes from now')
      expect(relativeDate('2017-09-07T12:59:01Z', NOW)).toEqual('59 minutes from now')
      expect(relativeDate('2017-09-07T13:00:00Z', NOW)).toEqual('an hour from now')
      expect(relativeDate('2017-09-07T13:00:01Z', NOW)).toEqual('an hour from now')
      expect(relativeDate('2017-09-07T14:00:00Z', NOW)).toEqual('2 hours from now')
      expect(relativeDate('2017-09-08T11:00:01Z', NOW)).toEqual('23 hours from now')
      expect(relativeDate('2017-09-08T12:00:00Z', NOW)).toEqual('tomorrow')
      expect(relativeDate('2017-09-09T00:00:00Z', NOW)).toEqual('tomorrow')
      expect(relativeDate('2017-09-10T22:59:59Z', NOW)).toEqual('2 days from now')
      expect(relativeDate('2017-09-14', NOW)).toEqual('6 days from now')
      expect(relativeDate('2017-09-14T12:00:00Z', NOW)).toEqual('a week from now')
      expect(relativeDate('2017-10-05T12:00:00Z', NOW)).toEqual('4 weeks from now')
      expect(relativeDate('2017-10-07T12:00:00Z', NOW)).toEqual('a month from now')
      expect(relativeDate('2018-03-07T12:00:00Z', NOW)).toEqual('6 months from now')
      expect(relativeDate('2018-09-07T12:00:00Z', NOW)).toEqual('a year from now')
      expect(relativeDate('2019-01-07T12:00:00Z', NOW)).toEqual('a year from now')
      expect(relativeDate('2019-10-07T12:00:00Z', NOW)).toEqual('over a year from now')
    })
  })

  describe('Constructing with the en-short locale', () => {
    const relativeDateEnShort = relativeDateFactory(enShortTranslations)

    it('Returns the correct relative string for the provided locale', () => {
      expect(relativeDateEnShort(NOW, NOW)).toEqual('now')
      expect(relativeDateEnShort('2017-09-07T11:59:29Z', NOW)).toEqual('31s')
      expect(relativeDateEnShort('2017-09-07T11:00:01Z', NOW)).toEqual('59m')
      expect(relativeDateEnShort('2017-09-06T12:00:01Z', NOW)).toEqual('23h')
      expect(relativeDateEnShort('2017-09-01', NOW)).toEqual('6d')
      expect(relativeDateEnShort('2017-08-31', NOW)).toEqual('1w')
      expect(relativeDateEnShort('2017-03-01', NOW)).toEqual('26w')
      expect(relativeDateEnShort('2016-04-07', NOW)).toEqual('1y')
      expect(relativeDateEnShort('2017-09-07T12:59:01Z', NOW)).toEqual('+59m')
      expect(relativeDateEnShort('2017-09-14', NOW)).toEqual('+6d')
      expect(relativeDateEnShort('2018-03-07T12:00:00Z', NOW)).toEqual('+26w')
    })
  })

  describe('Constructing with a provided locale', () => {
    const relativeDateDe = relativeDateFactory(deTranslations)

    it('Returns the correct relative string for the provided locale', () => {
      expect(relativeDateDe(NOW, NOW)).toEqual('gerade eben')
    })
  })

  describe('Constructing with a custom translation object', () => {
    const relativeDateCustom = relativeDateFactory({
      justNow: 'now-ish',
      hoursAgo: '{{time}} hours in the past',
      weeksAgo: (value) => `${value * 7} days ago`
    })

    it('Returns the correct relative string for the custom locale', () => {
      expect(relativeDateCustom(NOW, NOW)).toEqual('now-ish')
      expect(relativeDateCustom('2017-09-06T12:00:01Z', NOW)).toEqual('23 hours in the past')
    })

    it('Supports functions as translation values', () => {
      expect(relativeDateCustom('2017-08-24T12:00:00Z', NOW)).toEqual('14 days ago')
    })
  })
})
