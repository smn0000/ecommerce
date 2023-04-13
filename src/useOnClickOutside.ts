import {useEffect} from 'react'

export function useOnClickOutside(ref:any, callback:any) {
    useEffect(() => {
      function handleClickOutside(event:any) {
        if (ref.current && !ref.current.contains(event.target)) {
          callback()
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchmove", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchmove", handleClickOutside);
      };
    }, [ref]);
  }