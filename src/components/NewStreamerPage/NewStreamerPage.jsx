import { useState, useRef, useEffect } from "react";

export default function NewStreamerPage({ handleNewStreamer }) {
  const [invalidForm, setValidForm] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    bio: "Love to stream",
    content: "Gaming",
    platform: "Twitch",
    profileImg: "",
  });

  const formRef = useRef();

  useEffect(() => {
    formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNewStreamer(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Add Streamer Profile</h1>
      <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Add Streamer Profile</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Name (required):</th>
              <td>
                <input
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Bio (required):</th>
              <td>
                <input
                  className="form-control"
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Content/Category (required):</th>
              <td>
                <input
                  className="form-control"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Platform (required):</th>
              <td>
                <input
                  className="form-control"
                  name="platform"
                  value={formData.platform}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Profile Pic (imgUrl):</th>
              <td>
                <input
                  className="form-control"
                  name="profileImg"
                  value={formData.profileImg}
                  onChange={handleChange}
                />
              </td>
            </tr>
        <button type="submit" className="btn" disabled={invalidForm}>
          ADD STREAMER PROFILE
        </button>
          </tbody>
        </table>
      </form>
    </>
  );
}
