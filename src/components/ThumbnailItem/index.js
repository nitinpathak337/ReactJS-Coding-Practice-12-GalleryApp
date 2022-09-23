// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {details, changePhoto, isActive} = props
  const {thumbnailUrl, thumbnailAltText, imageUrl, imageAltText} = details
  const onClickPhoto = () => {
    changePhoto(imageUrl, imageAltText)
  }
  const active = isActive === 'Yes' ? 'active' : ''
  return (
    <li className={`list-item ${active}`}>
      <button type="button" onClick={onClickPhoto} className="button">
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem
