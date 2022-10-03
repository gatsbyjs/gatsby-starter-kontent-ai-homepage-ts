interface FallbackProps {
  blocktype: string
}

export default function Fallback({ blocktype }: FallbackProps) {
  console.warn(`No component found for: ${blocktype}`)
  return null
}
