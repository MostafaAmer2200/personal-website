export default function animateObject(animationName: string, threshold: number=0.9): void {
    const CapturedAnimations = document.querySelectorAll(animationName)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('scroll-animation')
                    observer.unobserve(entry.target);
                }
                
            })
        },
           { threshold: threshold,
           });
    
          for (let i = 0; i < CapturedAnimations.length; i++) {
           const elements = CapturedAnimations[i];
        
            observer.observe(elements);
    }

}