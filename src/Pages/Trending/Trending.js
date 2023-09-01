import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from '../../components/SingleContent/SingleContent'
import './Trending.css'
import CustomPagination from '../../components/Pagination/CustomPagination'

const Trending = () => {
 
        const [Page, setPage] = useState(1);
        const [content, setContent] = useState([]);

        const fetchTrending = async () => {
            const {data} = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=c1f74ef7207bccaa259c8a578e8f9f01&page=${Page}`);
        
            // console.log(data.results);
        
        setContent(data.results);
    };

    useEffect(() => {
        fetchTrending();
        //eslint-disable-next-line
    }, [Page]);

    return (
        <div>
            <span className='pageTitle'>Trending</span>
            <div className="trending">
            {content && content.map((c)=><SingleContent key={c.id} id={c.id} poster={c.poster_path} title={c.title || c.name} 
            date={c.first_air_date || c.release_date} media_type={c.media_type} vote_average={c.vote_average} />)}
            </div>
            <CustomPagination setPage={setPage}/>
        </div>
    )
}

export default Trending
