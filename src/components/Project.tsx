import React from "react";
import '../assets/styles/Project.scss';

import MT from '../assets/images/MT.png';
import VT1 from '../assets/images/VT1.png';
import VT2 from '../assets/images/VT2.png';
import AIBot from '../assets/images/AI-bot.png';
import DataViz from '../assets/images/geospatial_map_preview.png';
import PeekSeek from '../assets/images/PeekSeek.png';
import UXUI from '../assets/images/UX-UI.png';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>

            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/asirimece/clustered-transfer-learning-mi-bci" target="_blank" rel="noreferrer">
                        <img src={MT} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/asirimece/clustered-transfer-learning-mi-bci" target="_blank" rel="noreferrer">
                        <h2>Cluster-Based Transfer Learning for Brain-Computer Interfaces</h2>
                    </a>
                    <p>
                        Master’s thesis project focused on improving cross-subject generalization and reducing calibration effort in EEG-based Brain–Computer Interfaces (BCIs). The work introduces a cluster-aware transfer learning framework that combines population clustering, multi-task learning, and few-shot adaptation to enable accurate motor imagery decoding with minimal per-user calibration. The system was trained on a harmonized dataset of 85 subjects and evaluated on newly recorded EEG sessions under deployment-like conditions. Results show that cluster-conditioned few-shot personalization consistently outperforms pooled transfer models, while generic augmentation and increased calibration trials offer limited benefit.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/asirimece/eeg-spectrum-generative-models" target="_blank" rel="noreferrer">
                        <img src={VT1} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/asirimece/eeg-spectrum-generative-models" target="_blank" rel="noreferrer">
                        <h2>Spectrum-Based Generative EEG Modeling</h2>
                    </a>
                    <p>
                        Six-month independent MSc research project focused on generative modeling of EEG signals using a spectrogram-based representation. The project investigates how conditional Wasserstein GANs trained in the time–frequency domain can generate realistic synthetic EEG data for event-related potential (ERP) paradigms. I designed and implemented a full end-to-end pipeline covering EEG preprocessing, time–frequency transformation via STFT, conditional GAN training with gradient penalty, inverse reconstruction to the time domain, and quantitative evaluation of generated signals. Synthetic data quality was assessed through ERP waveform comparison, power spectral density analysis, and scalp topography evaluation using established neurophysiological metrics. The project emphasizes signal fidelity, spectral consistency, and the practical feasibility of synthetic EEG generation for data augmentation and analysis in neurotechnology and BCI research.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/YOUR_USERNAME/EEG-Transfer-Learning-Motor-Imagery" target="_blank" rel="noreferrer">
                        <img src={VT2} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/YOUR_USERNAME/EEG-Transfer-Learning-Motor-Imagery" target="_blank" rel="noreferrer">
                        <h2>Transfer Learning for Motor Imagery EEG Decoding</h2>
                    </a>
                    <p>
                        Independent MSc project investigating transfer learning strategies for EEG-based motor imagery Brain–Computer Interfaces. The project focuses on learning shared neural representations across subjects and adapting pretrained models to new users to mitigate inter-subject variability and reduce calibration effort. I implemented a full end-to-end EEG decoding pipeline using convolutional neural networks, multi-task learning, and subject-specific fine-tuning. Different training and adaptation strategies were systematically evaluated on a benchmark motor imagery dataset. This project served as the foundational work for my MSc thesis on cluster-based transfer learning and in-session calibration for BCIs.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/asirimece/Conversational-AI-Bot" target="_blank" rel="noreferrer">
                        <img src={AIBot} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/asirimece/Conversational-AI-Bot" target="_blank" rel="noreferrer">
                        <h2>Conversational AI Movie Recommendation System</h2>
                    </a>
                    <p>
                        Design and implementation of a conversational AI chatbot that supports both natural language interaction and structured SPARQL queries over a movie knowledge graph. The system enables users to explore detailed movie-related information and receive personalized recommendations by combining semantic graph reasoning with crowd-sourced preference data. The project focuses on bridging formal knowledge-graph querying and intuitive conversational interfaces, allowing non-technical users to interact with complex relational data through dialogue.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/asirimece/Interactive-Data-Visualization" target="_blank" rel="noreferrer">
                        <img src={DataViz} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/asirimece/Interactive-Data-Visualization" target="_blank" rel="noreferrer">
                        <h2>Interactive Data Visualization Systems</h2>
                    </a>
                    <p>
                        Collection of interactive data visualization projects developed using the Python Bokeh library, focused on transforming complex, high-dimensional datasets into interpretable and interactive visual analytics tools. The visualizations span multiple domains, including geospatial analysis of technology companies, financial performance exploration, and dimensionality-reduction-based clustering of high-dimensional data. Emphasis was placed on coordinated views, interactive filtering, and principled visual encodings to support exploratory analysis and data-driven decision making.
                    </p>
                </div>

                <div className="project">
                    <a href="https://github.com/sopra-fs24-group-12/PeekSeek-client" target="_blank" rel="noreferrer">
                        <img src={PeekSeek} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://github.com/sopra-fs24-group-12/PeekSeek-client" target="_blank" rel="noreferrer">
                        <h2>Real-Time City Exploration Game</h2>
                    </a>
                    <p>
                        Full-stack web application designed to support real-time, location-based exploration of urban environments through a game-driven interface. The system integrates interactive maps, live geolocation data, and real-time user interaction to enable collaborative city discovery. The application was built with a real-time architecture using WebSockets for bidirectional updates and external geospatial APIs for map rendering and location services. Emphasis was placed on system responsiveness, synchronization between clients, and scalable handling of live user data. The project includes a deployed version and comprehensive technical documentation detailing architecture, APIs, and implementation decisions.
                    </p>
                </div>

                <div className="project">
                    <a href="https://www.figma.com/file/jOgXT6LVBmELbIuTL2DsJ5/UX%2FUI-Design" target="_blank" rel="noreferrer">
                        <img src={UXUI} className="zoom" alt="thumbnail" width="100%" />
                    </a>
                    <a href="https://www.figma.com/file/jOgXT6LVBmELbIuTL2DsJ5/UX%2FUI-Design" target="_blank" rel="noreferrer">
                        <h2>User-Centered UX/UI Design — Photography Platform</h2>
                    </a>
                    <p>
                        End-to-end UX/UI design of a platform aimed at connecting nature photographers. The project followed a user-centered design process, starting from qualitative user research and progressing through requirements definition, conceptual modeling, and iterative prototyping. User insights gathered through interviews informed core functionality and interaction flows. Design solutions were explored through low- to high-fidelity wireframes, with a strong focus on usability, clarity, and a consistent component-based design system. The full design process — from research and conceptual models to interactive prototypes — is documented and accessible via Figma.
                    </p>
                </div>

            </div>
        </div>
    );
}

export default Project;
