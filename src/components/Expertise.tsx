import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faDocker, faReact } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsML = [
    "Python",
    "PyTorch",
    "scikit-learn",
    "NumPy",
    "pandas",
    "SciPy",
    "Representation Learning",
    "Transfer Learning",
    "Generative Models"
];

const labelsResearch = [
    "Hydra",
    "Experiment Design",
    "Benchmarking",
    "Ablation Studies",
    "Statistical Evaluation",
    "Reproducible Pipelines",
    "Scientific Computing"
];

const labelsSystems = [
    "Docker",
    "Linux",
    "Git",
    "CI/CD",
    "REST APIs",
    "PostgreSQL",
    "ETL Pipelines",
    "Cloud Fundamentals"
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">

                    <div className="skill">
                        <FontAwesomeIcon icon={faPython} size="3x" />
                        <h3>Applied AI & Machine Learning Systems</h3>
                        <p>
                            I specialize in designing, implementing, and evaluating data-driven AI systems
                            for complex, high-dimensional data. My work spans supervised, generative, and
                            representation-learning models, with a strong emphasis on experimental rigor,
                            reproducibility, and interpretability.
                            <br /><br />
                            I build end-to-end machine learning pipelines covering data preprocessing,
                            feature extraction, model training, benchmarking, and deployment-ready evaluation,
                            prioritizing robustness and realistic performance over isolated benchmark scores.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Focus areas:</span>
                            {labelsML.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faReact} size="3x" />
                        <h3>Research Engineering & Reproducible Experimentation</h3>
                        <p>
                            My background as a research engineer emphasizes clean experimental design and
                            reproducible ML workflows. I structure projects around modular pipelines,
                            configuration-driven experimentation, and systematic comparison of modeling strategies.
                            <br /><br />
                            I focus on building research codebases that support rapid iteration while remaining
                            interpretable and maintainable, enabling clear conclusions about model behavior,
                            generalization, and failure modes.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Core practices:</span>
                            {labelsResearch.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faDocker} size="3x" />
                        <h3>Data Engineering & ML Infrastructure</h3>
                        <p>
                            In addition to modeling, I have strong experience with the data and infrastructure
                            layers that support ML systems. This includes ETL-style pipelines, heterogeneous
                            data handling, and integration of models into larger software systems.
                            <br /><br />
                            I am comfortable working across the full stack where needed, ensuring models are
                            usable, testable, and scalable beyond notebooks and research prototypes.
                        </p>
                        <div className="flex-chips">
                            <span className="chip-title">Technologies:</span>
                            {labelsSystems.map((label, index) => (
                                <Chip key={index} className="chip" label={label} />
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Expertise;
