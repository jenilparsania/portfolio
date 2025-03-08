

export default function Trial({ banner, title, description, github, demo }) {
  return (
    <div
      className="project-container d-flex flex-column align-items-center p-4"
      style={{
        borderRadius: "20px",
        border: "0.5px solid rgb(3, 105, 161)",
        minWidth: "20rem",
        maxWidth: "20rem",
        minHeight: "10rem",
        background: "transparent",
      }}
    >
      <img
        src={banner}
        alt={title}
        className="rounded mb-4"
        style={{ height: "10rem", width: "100%", objectFit: "cover" }}
      />
      <h4 className="text-white fw-bold mb-2" style={{ minHeight: "3rem" }}>
        {title}
      </h4>
      <p className="text-gray-400 text-sm" style={{ flexGrow: 1 }}>
        {description}
      </p>
      <div className="mt-4 d-flex justify-content-start w-100">
        <a
          href={github}
          className="btn px-3 rounded me-2"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgb(224, 242, 254)",
            color: "rgb(2, 132, 199)",
            border: "1px solid rgb(224, 242, 254)",
          }}
        >
          GitHub
        </a>
        <a
          href={demo}
          className="btn px-3 rounded"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            backgroundColor: "rgb(14, 165, 233)",
            color: "rgb(255, 255, 255)",
          }}
        >
          Demo
        </a>
      </div>
    </div>
  );
}

