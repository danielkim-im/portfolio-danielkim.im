import config from "../config";

export default function Footer() {
  return (
    <>
      <div
        className="hidden md:flex flex-row justify-around h-auto pt-[5vh] pb-[5vh]"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <p>Developed with ❤️ from Toronto</p>
          <p>Copyright © 2025 Euichan Kim</p>
        </div>

        <div>
          <p>Get in touch</p>
          <p>
            <a href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a>
          </p>
        </div>

        <div>
          <p>Follow on</p>
          <div className="flex flex-row gap-2">
            <a
              href={config.linkedInURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={config.gitHubURL}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>

      <div
        className="flex flex-col items-center gap-4 md:hidden py-6 px-4 text-center"
        style={{ backgroundColor: "white" }}
      >
        <div>
          <p>
            <a href={`mailto:${config.emailAddress}`}>{config.emailAddress}</a>
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={config.linkedInURL}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a href={config.gitHubURL} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>

        <div>
          <p>Developed with ❤️ from Toronto</p>
          <p>© 2025 Euichan Kim</p>
        </div>
      </div>
    </>
  );
}
