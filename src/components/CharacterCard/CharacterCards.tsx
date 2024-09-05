import { Character } from "../../types"
import styles from "./CharacterCard.module.scss"

interface Props {
  characters: Character[]
}

export const CharacterCards: React.FC<Props> = ({ characters }) => {
  if (!characters || characters.length === 0) {
    return <p>No characters found.</p>
  }

  return (
    <>
      {characters.map(character => (
        <div
          key={character.id}
          className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4 position-relative text-dark"
        >
          <div className={styles.card}>
            <div className={styles.imgWrapper}>
              <img 
                className={styles.img} 
                src={character.image} 
                alt={character.name} 
              />
            </div>
            <div className={styles.content}>
              <div className="fs-5 fw-bold mb-4">{character.name}</div>
              <div>
                <div className="fs-6 fw-normal">Base Ki</div>
                <div className="fs-5">{character.ki}</div>
                <div className="fs-6 fw-normal">Max Ki</div>
                <div className="fs-5">{character.maxKi}</div>
                <div className="fs-6 fw-normal">Afilliation</div>
                <div className="fs-5">{character.affiliation}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
