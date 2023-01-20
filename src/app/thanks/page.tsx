import GoBack from "@/components/Buttons/GoBack";

export default function About() {
  return (
    <>
      <GoBack />
      <section className="page">
        <h1>Thanks for the opportunity</h1>
        <p style={{ width:"70ch" }}>
          Hi! This is me, Nahuel Santillan. I hope you like the page (and the code).
           In the README.md of the repo is the explanation of the code in case of 
           being needed. 
        </p>
      </section>
    </>
  )
}