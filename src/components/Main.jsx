import React from 'react'

function Main(props) {
  const {data} = props
  console.log(data)
  return (
    <div className="imgContainer">
      {/* <img src={data.hdurl} alt={data.title || "bg-img"} className="bgImage" /> */}

      <div className="media-container">
        {data.media_type === "image" ? (
          <img
            src={data.hdurl}
            alt={data.title || "bg-img"}
            className="bgImage"
          />
        ) : (
          <div className="video-wrapper">
            <iframe
              src={data.url}
              title={data.title}
              className="bgVideo"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Main