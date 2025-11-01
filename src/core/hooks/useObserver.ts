import { useEffect } from "react"

export interface useObserverProps {
    ref: React.RefObject<Element | null>,
    isLoading: boolean,
    canLoad: boolean,
    callback: () => void,
    root?: Element | null
    threshold?: number
}


export default function(props: useObserverProps) {
    const {ref, isLoading, canLoad, callback, root, threshold} = props
    useEffect(() => {
    if (isLoading) return
    if(!ref) return
    const element = ref.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(canLoad)
        if (entry.isIntersecting && canLoad) {
          console.log("Element visible to screen")
          callback()
        }
      },
      {
        root,
        threshold,
      }
    )

    observer.observe(element)

    return () => {
      if (element) observer.unobserve(element)
    }
  }, [isLoading, canLoad, callback, ref, root, threshold])
}