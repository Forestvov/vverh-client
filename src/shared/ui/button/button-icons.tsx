import type { SVGProps } from 'react'

function YandexIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13 1C19.6268 1 25 6.37323 25 13C25 19.6268 19.6268 25 13 25C6.37323 25 1 19.6268 1 13C1 6.37323 6.37323 1 13 1Z"
        fill="#FC3F1D"
      />
      <path
        d="M14.381 19H17V6H13.1896C9.35846 5.997 7.34387 7.69931 7.34387 10.2062C7.34387 12.2088 8.44842 13.3857 10.4179 14.6016L7 18.997H9.83432L13.6412 14.0762L12.3213 13.3106C10.72 12.3769 9.94199 11.6473 9.94199 10.0741C9.94199 8.69007 11.0674 7.75335 13.2105 7.75335H14.3776L14.381 19Z"
        fill="white"
      />
    </svg>
  )
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 26 26" aria-hidden="true" fill="none" {...props}>
      <path
        d="M8 6.8c0-.9 1-1.4 1.8-.9l9.5 6.2c.7.5.7 1.5 0 2l-9.5 6.2c-.8.5-1.8 0-1.8-.9V6.8Z"
        fill="currentColor"
      />
    </svg>
  )
}

export { PlayIcon, YandexIcon }
