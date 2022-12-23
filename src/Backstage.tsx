function Backstage(): JSX.Element {
  return (
    <>
      <h1>Bastidores</h1>
      <section className="flex">
        <div>
          <h2>Eu achei que era pro Matheus...</h2>
          <video src="/video/gravando_audio_matheus.mp4" controls></video>
        </div>
        <div>
          <h2>Consertando o áudio</h2>
          <video src="/video/gravando_audio_murilo.mp4" controls></video>
        </div>
      </section>
    </>
  );
}

export default Backstage;
