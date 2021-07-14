import  {useEffect ,useState}from 'react';

const useMedia = (query) => {
    const windowGlobal = typeof window !== 'undefined' && window
    const [matches, setMatches] = useState(typeof window !=='undefined' && window.matchMedia(query).matches);

    useEffect(() => {
      const media = windowGlobal.matchMedia(query)
      if (media.matches !== matches) setMatches(media.matches)
      const listener = () => setMatches(media.matches)
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    }, [matches, query, windowGlobal])

    return matches
  }

  export default useMedia;