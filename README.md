# Relative Date

[![Build Status](https://travis-ci.org/wildlyinaccurate/tiny-relative-date.png?branch=master)](https://travis-ci.org/wildlyinaccurate/tiny-relative-date)

Tiny function that provides relative, human-readable dates.

## Installation

```
npm install tiny-relative-date
```

## Usage

The module returns a `relativeDate` function with English translations by default.

```js
const relativeDate = require('tiny-relative-date')
```

The `relativeDate` function accepts date strings or `Date` objects.

```js
relativeDate('2017-06-25 09:00') // '12 hours ago'
relativeDate(new Date()) // 'just now'
```

The value of "now" can also be passed as a second parameter.

```js
const now = new Date('2017-06-25 08:00:00')
const date = new Date('2017-06-25 07:00:00')

relativeDate(date, now) // 'an hour ago'
```

### Using a non-English locale

The tiny-relative-date module can be initialised with a locale. See the [translations directory]('./translations') for a list of available locales.

```js
const relativeDateFactory = require('tiny-relative-date/lib/factory')
const relativeDate = relativeDateFactory('de')

relativeDate(new Date()) // 'gerade eben'
```

### Using a custom locale

You can also use a completely custom locale by passing a translations object instead of a locale string. Translations can be plain strings with a `{{time}}` placeholder, or they can be functions. See the **Adding new locales** section below for a list of translation keys.

```js
const relativeDateFactory = require('tiny-relative-date/lib/factory')
const relativeDate = relativeDateFactory({
  hours_ago: '{{time}}h ago',
  days_ago: (days) => `${days * 24}h ago`
})

relativeDate('2017-06-25 07:00:00') // '2h ago'
relativeDate('2017-06-24 06:00:00') // '27h ago'
```

## Contributing

Contributions are welcome! Running this project locally requires Git and Node.js.

```
git clone git@github.com:wildlyinaccurate/tiny-relative-date.git
cd tiny-relative-date/
npm install
```

Once you are set up, you can make changes to files in the `src/`, `spec/` and `translations/` directories. Build any changes you make by running

```
npm run build
```

And run the tests with

```
npm run test
```

### Adding new locales

If you would like to add a new locale, please create a JSON file in the `translations` directory and ensure it has the following keys:

| Key                    | Default value ("en" locale) |
|------------------------|-----------------------------|
| `just_now`             | just now                    |
| `seconds_ago`          | {{time}} seconds ago        |
| `a_minute_ago`         | a minute ago                |
| `minutes_ago`          | {{time}} minutes ago        |
| `an_hour_ago`          | an hour ago                 |
| `hours_ago`            | {{time}} hours ago          |
| `a_day_ago`            | yesterday                   |
| `days_ago`             | {{time}} days ago           |
| `a_week_ago`           | a week ago                  |
| `weeks_ago`            | {{time}} weeks ago          |
| `a_month_ago`          | a month ago                 |
| `months_ago`           | {{time}} months ago         |
| `a_year_ago`           | a year ago                  |
| `years_ago`            | {{time}} years ago          |
| `over_a_year_ago`      | over a year ago             |
| `seconds_from_now`     | {{time}} seconds from now   |
| `a_minute_from_now`    | a minute from now           |
| `minutes_from_now`     | {{time}} minutes from now   |
| `an_hour_from_now`     | an hour from now            |
| `hours_from_now`       | {{time}} hours from now     |
| `a_day_from_now`       | tomorrow                    |
| `days_from_now`        | {{time}} days from now      |
| `a_week_from_now`      | a week from now             |
| `weeks_from_now`       | {{time}} weeks from now     |
| `a_month_from_now`     | a month from now            |
| `months_from_now`      | {{time}} months from now    |
| `a_year_from_now`      | a year from now             |
| `years_from_now`       | {{time}} years from now     |
| `over_a_year_from_now` | over a year from now        |
