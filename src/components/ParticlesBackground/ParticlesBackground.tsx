import {useEffect, useMemo, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {type ISourceOptions,} from "@tsparticles/engine";
import {loadFull} from "tsparticles";

export const ParticlesBackground = ({className}: { className?: string }) => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {

            await loadFull(engine);

        }).then(() => {
            setInit(true);
        });
    }, []);

    const options: ISourceOptions = useMemo(
        () => ({
            autoPlay: true,
            fullScreen: {
                zIndex: -1
            },

            detectRetina: true,
            fpsLimit: 120,

            interactivity: {
                detectsOn: "window",
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onDiv: [
                        {
                            selectors: "#some-div",
                            enable: true,
                            mode: "repulse",
                            type: "circle",
                        },
                    ],
                    onHover: {
                        enable: true,
                        mode: "grab",
                        parallax: {
                            enable: true,
                            force: 60,
                            smooth: 10,
                        },
                    },
                    resize: {
                        delay: 0.5,
                        enable: true,
                    },
                },
                modes: {
                    grab: {
                        distance: 400,
                        links: {
                            opacity: 1,
                        },
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 0.8,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                    push: {
                        quantity: 4,
                    },
                    remove: {
                        quantity: 2,
                    },
                },
            },
            particles: {
                number: {
                    value: 100,
                    density: {
                        enable: true,
                        width: 1920,
                        height: 1080,
                    },
                },
                color: {
                    value: "#f9004d",
                },
                shape: {
                    type: "circle",
                },
                opacity: {
                    value: {min: 0.1, max: 0.5},
                    animation: {
                        enable: true,
                        speed: 3,
                        startValue: "random",
                    },
                },
                size: {
                    value: {min: 1, max: 10},
                    animation: {
                        enable: true,
                        speed: 20,
                        startValue: "random",
                    },
                },
                links: {
                    enable: true,
                    distance: 150,
                    color: "#f9004d",
                    opacity: 0.4,
                    width: 1,
                },
                move: {
                    enable: true,
                    speed: 2,
                    direction: "none",
                    outModes: {
                        default: "out",
                    },
                },
            },
            motion: {
                disable: false,
                reduce: {
                    factor: 4,
                    value: true,
                },
            },
            pauseOnBlur: true,
            pauseOnOutsideViewport: true,

        }),
        []
    );
    if (init) {
        return (
            <Particles
                className={className}
                id="tsparticles"
                options={options}
            />
        );
    }

    return <></>;
};