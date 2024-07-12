import { useEffect, useState } from 'react';
import Spinner from './spinner/Spinner';

const InstagramFeed = ({ token }) => {
    const [instagramData, setInstagramData] = useState([]);
    const [loading, setLoading] = useState(true); // Estado para el spinner de carga

    const host = "https://graph.instagram.com/me/media?";
    const path = "fields=media_url,permalink&access_token=";
    const fallbackUrl = "https://fgp.one/feed/get-data";
    const numberOfPosts = 6;
    const widthPercentage = 25;

    useEffect(() => {
        const fetchInstagramData = async () => {
            const jsonData =
                token && token.length > 170 ? host + path + token : fallbackUrl;
            try {
                const response = await fetch(jsonData);
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();

                setInstagramData(data.data.slice(0, numberOfPosts));
                setLoading(false);
            } catch (error) {
                console.error("Error fetching Instagram data:", error);
                setLoading(false); // En caso de error, también paramos el spinner
            }
        };

        fetchInstagramData();
    }, [token]);



    return (
        <div id="post" style={{ width: '100%', minHeight: '100vh', paddingTop: '50px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '50px' }}>
            {loading
                ? <Spinner />
                : instagramData.length > 0 &&
                instagramData.map(item => (
                    <iframe
                        key={item.id}
                        className="instagram-media instagram-media-rendered"
                        id={`instagram-embed-${item.id}`}
                        src={`${item.permalink}embed/captioned/?utm_source=ig_embed&utm_campaign=loading`}
                        allowFullScreen={true}
                        height="528"
                        data-instgrm-payload-id={`instagram-media-payload-${item.id}`}
                        scrolling="no"
                        style={{
                            width: `${widthPercentage}%`,
                            backgroundColor: "white",
                            borderRadius: "3px",
                            border: "1px solid rgb(219, 219, 219)",
                            boxShadow: "none",
                            display: "block",
                            margin: "0 0 12px",
                            minWidth: "326px",
                            padding: "0"
                        }}>
                    </iframe>
                ))
            }
            <script src='https://www.instagram.com/embed.js'></script>
        </div>
    );
};

export default InstagramFeed;
