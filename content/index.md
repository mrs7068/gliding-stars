---
title: Home
layout: base.njk

hero_video: /assets/video/hero.mp4
hero_logo: /assets/images/logo.png
hero_motto: "I CAN DO IT! I CAN SKATE!"

mission: "Gliding Stars of Erie is an adaptive ice skating program that helps individuals with disabilities grow physically, socially, and emotionally through the sport of skating."

feature_enabled: false
---

<!-- HERO -->
<section class="hero">
  <video autoplay muted loop playsinline class="hero-video">
    <source src="{{ hero_video | url }}" type="video/mp4">
  </video>

  <div class="hero-overlay">
    <img src="{{ hero_logo | url }}" alt="Gliding Stars logo" class="hero-logo">
    <h1>{{ hero_motto }}</h1>
    <p class="hero-sub">
      Building confidence, independence, and community on the ice
    </p>
  </div>
</section>

<!-- MISSION -->
<section class="section mission">
  <p>{{ mission }}</p>
</section>

<!-- QUICK PATHS -->
<section class="section quick-links">

  <div class="card">
    <h3>About the Program</h3>
    <p>Learn how Gliding Stars works and what makes it meaningful for skaters and families.</p>
    <a href="{{ '/about-us/' | url }}" class="button">Learn More</a>
  </div>

  <div class="card">
    <h3>Season & Schedule</h3>
    <p>See how the season is structured and find current schedules and updates.</p>
    <a href="{{ '/our-program/' | url }}" class="button">View Schedule</a>
  </div>

  <div class="card">
    <h3>Get Involved</h3>
    <p>Join as a skater, volunteer, or supporter and become part of the community.</p>
    <a href="{{ '/get-involved/' | url }}" class="button">Contact Us</a>
  </div>

</section>

<!-- VISUAL STRIP -->
<section class="section gallery-preview">
  <img src="{{ '/assets/images/sample1.jpg' | url }}" alt="Gliding Stars skaters">
  <img src="{{ '/assets/images/sample2.jpg' | url }}" alt="Gliding Stars program">
  <img src="{{ '/assets/images/sample3.jpg' | url }}" alt="Gliding Stars performance">
</section>

<!-- SHOW PREVIEW -->
<section class="section show-preview">
  <h2>The Ice Show</h2>
  <p>
    Each season builds toward a final performance where every skater has the opportunity to shine.
    It’s a moment of confidence, pride, and celebration for skaters and families alike.
  </p>
</section>

<!-- COMMUNITY -->
<section class="section community">
  <h2>A Community on and off the Ice</h2>
  <p>
    Gliding Stars is more than a skating program—it’s a place where friendships form,
    families connect, and everyone feels part of something bigger.
  </p>
</section>

{% if feature_enabled %}
<section class="section feature">
  <h2>Summer Program</h2>
  <p>Details about the off-season program go here.</p>
</section>
{% endif %}