
        // Intersection Observer for fade-up animation
        const observer = new IntersectionObserver(
            entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
            { threshold: 0.12 }
        );

        document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

        // Animated counter for hero stats
        function animateCount(el, target, suffix = '') {
            let start = 0;
            const duration = 1800;
            const step = (timestamp) => {
                if (!start) start = timestamp;
                const progress = Math.min((timestamp - start) / duration, 1);
                const ease = 1 - Math.pow(1 - progress, 3);
                el.textContent = Math.round(ease * target) + suffix;
                if (progress < 1) requestAnimationFrame(step);
            };
            requestAnimationFrame(step);
        }

        // Run counters once hero is visible
        setTimeout(() => {
            const nums = document.querySelectorAll('.stat-num');
            // Only animate the numeric one (index 0 = 3 sites)
            animateCount(nums[0], 3, '');
        }, 600);
