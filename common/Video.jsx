import Script from 'next/script'

const VideoPlayer = () => (
  <>
    <span
      className="wistia_embed wistia_async_7709j2l5ds popover=true popoverAnimateThumbnail=true"
      style={{
        display: 'inline-block',
        height: '84px',
        position: 'relative',
        width: '150px',
      }}
    />
    <Script
      id="wistia1"
      src="https://fast.wistia.com/embed/medias/7709j2l5ds.jsonp"
      onError={(e) => {
        console.error('Script failed to load', e)
      }}
    />
    <Script
      id="wistia2"
      src="https://fast.wistia.com/assets/external/E-v1.js"
      onError={(e) => {
        console.error('Script failed to load', e)
      }}
    />
  </>
)

export default VideoPlayer
