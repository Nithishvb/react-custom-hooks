import React , { useState , useEffect} from 'react'
import axios from 'axios'

const CustomHooks = (url) => {
  
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios.get(url).then((res) => {
        setPost(res.data)        
    })
  }, [])

  return [post];

}

export default CustomHooks;