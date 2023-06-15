/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useApi from "../services/useApi";
import NewScript from "../components/NewScript";
import particles from "../assets/img/particles.png";

function PostScriptPage() {
  const [scenarios, setScenarios] = useState([]);
  const [title, setTitle] = useState("");
  const [genreSelected, setGenreSelected] = useState("");
  const [genreData, setGenreData] = useState([]);
  const [synopsis, setSynopsis] = useState("");
  const [refresh, setRefresh] = useState(false);
  const [fileUpload, setFileUpload] = useState(null);
  const [urlImage, setUrlImage] = useState("");
  const api = useApi();

  useEffect(() => {
    if (fileUpload) {
      const img = URL.createObjectURL(fileUpload);
      setUrlImage(img);
    }
  }, [fileUpload]);

  useEffect(() => {
    const getScenario = () => {
      const url = "/scenario";
      api
        .get(url)
        .then((resp) => {
          setScenarios(resp.data);
        })
        .catch((err) => {
          console.warn(err);
        });
    };
    getScenario();
  }, [refresh]);

  useEffect(() => {
    api
      .get("/genre")
      .then((resp) => {
        setGenreData(resp.data);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, [genreSelected]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("genre", genreSelected);
    formData.append("synopsis", synopsis);
    formData.append("scenario", fileUpload);
    const url = "/scenario";
    api
      .post(url, formData)
      .then(() => {
        setRefresh(!refresh);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFileUpload(file);
  };

  return (
    <div className="post-script-page-container">
      <form className="post-script-page-inputs" onSubmit={handleSubmit}>
        <label htmlFor="post-script-page-title">Titre</label>
        <input
          type="text"
          id="post-script-page-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <select
          value={genreSelected}
          onChange={(e) => {
            setGenreSelected(e.target.value);
          }}
        >
          <option value="">Genre</option>
          {genreData.map((genreItem) => {
            return (
              <option value={genreItem.id} key={genreItem.id}>
                {genreItem.nameGenre}
              </option>
            );
          })}
        </select>
        <label htmlFor="synopsis">Synopsis</label>
        <textarea
          name="synopsis"
          id="synopsis"
          cols="3"
          rows="1"
          value={synopsis}
          onChange={(e) => setSynopsis(e.target.value)}
        />
        <label htmlFor="script">Scénario</label>
        <input type="file" id="script" onChange={handleFileUpload} />
        <button type="submit">Poster mon scénario</button>
      </form>
      <div>
        {scenarios.map((scenarioItem) => (
          <NewScript
            key={scenarioItem.id}
            scenarioItem={scenarioItem}
            refresh={refresh}
            setRefresh={setRefresh}
          />
        ))}
      </div>
      <img src={particles} alt="Particles" className="particles" />
    </div>
  );
}

export default PostScriptPage;
