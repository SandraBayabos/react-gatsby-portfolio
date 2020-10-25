import React from "react"
import ProfileImage from "../components/profileImage"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "bootstrap/dist/css/bootstrap.min.css"

const styles = {
  container: {
    height: "100vh",
  }
}

const IndexPage = () => (
  <Layout>
    <div className="container d-flex" style={styles.container}>
      <div className="col align-self-center">
        <SEO title="Sandra Bayabos" />
        <div className="row justify-content-center">
          <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <ProfileImage />
          </div>
        </div>
        <div className="row justify-content-center">
          <h1>Sandra Bayabos</h1>
        </div>
        <div className="row justify-content-center">
          <p>Junior Web Developer in Malaysia</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
