import React from 'react'

const ProjectCard = (props) => {

    const  { project } = props

  return (
    <div>
      <img src="{project.poster}" alt="{project.title}" />
      <h1>{project.pitle} </h1>
      <p>{project.year} </p>
    </div>
  )
}

export default ProjectCard
