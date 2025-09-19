import Particles from "@/components/Particles"
export default function HeroAnimation() {
    return (
        <div className="h-full w-full">
            <Particles
                particleColors={['#ffffff', '#ffffff']}
                particleCount={400}
                particleSpread={8}
                speed={0.1}
                particleBaseSize={100}
                moveParticlesOnHover={true}
                alphaParticles={false}
                disableRotation={false}
            />
        </div>
    )
}