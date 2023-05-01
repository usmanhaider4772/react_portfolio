import './style.css'
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaInstagram,
  FaResearchgate
} from 'react-icons/fa'
import { socialprofils } from '../../content_option'

export const SocialIcons = () => {
  return (
    <div className='stick_follow_icon'>
      <ul>
        {socialprofils.twitter && (
          <li>
            <a href={socialprofils.twitter}>
              <FaTwitter />
            </a>
          </li>
        )}
        {socialprofils.github && (
          <li>
            <a href={socialprofils.github}>
              <FaGithub />
            </a>
          </li>
        )}
        {socialprofils.facebook && (
          <li>
            <a href={socialprofils.facebook}>
              <FaFacebookF />
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a href={socialprofils.linkedin}>
              <FaLinkedin />
            </a>
          </li>
        )}
        {socialprofils.instagram && (
          <li>
            <a href={socialprofils.instagram}>
              <FaInstagram />
            </a>
          </li>
        )}
        {socialprofils.researchgate && (
          <li>
            <a href={socialprofils.researchgate}>
              <FaResearchgate />
            </a>
          </li>
        )}
      </ul>
      <p>Follow Me</p>
    </div>
  )
}
