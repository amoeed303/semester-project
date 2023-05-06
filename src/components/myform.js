import "./styles/myform.css"
const FeedBackPage = () => {
  return (
    <div className="tq-container">
      <img src={""} alt="love emoji" />
      <h1>Thank You</h1>
      <p>
        we will use your feedback to improve our customer support
        <br />
        performance.
      </p>
    </div>
  )
}
const OriginPage = () => {
  const emojis = [
    {
      id: 1,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4DviA0qaQN-JAx5Sw0ZL-LXqaj6fpSCwOw&usqp=CAU",
      name: "happy",
    },
    {
      id: 2,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4DviA0qaQN-JAx5Sw0ZL-LXqaj6fpSCwOw&usqp=CAU",
      name: "sad",
    },
    {
      id: 3,
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI4DviA0qaQN-JAx5Sw0ZL-LXqaj6fpSCwOw&usqp=CAU",
      name: "rad",
    },
  ]
  return (
    <div className="emojis-container">
      <h1>
        How satisfied are you with our
        <br />
        App Performance, Let us know
      </h1>
      <ul className="emoji-container">
        {emojis.map((emoji) => (
          <li key={emoji.id} className="list-container">
            <button
              type="button"
            //   onClick={this.onChangeResponse}
              className="button"
            >
              <img src={emoji.imageUrl} alt={emoji.name} className="img" />
              <p>{emoji.name}</p>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
function MyForm() {
  return (
    <div className="bg-container">
      <div className="sub-container">
        {/* {isFeedBack ? this.originPage() : this.feedBackPage()} */}
        <OriginPage />
      </div>
    </div>
  )
}

export default MyForm
