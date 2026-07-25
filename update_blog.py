import re

new_posts = """
  {
    slug: "5-warning-signs-switchboard-upgrade",
    title: "5 Warning Signs Your Indooroopilly Home Needs a Switchboard Upgrade",
    excerpt: "An outdated switchboard is a ticking time bomb. Learn the top 5 signs that your home's electrical heart needs a modern, safe replacement.",
    date: "August 10, 2026",
    category: "Safety",
    readTime: "5 min read",
    image: "/blog/switchboard-upgrade.png",
    content: `
## The Heart of Your Home's Electrical System

Your switchboard is the central hub of your home's electrical wiring. It's responsible for distributing power to every light, appliance, and outlet. If you live in an older home in Indooroopilly or the surrounding western suburbs, there's a good chance your switchboard is struggling to keep up with the demands of modern living.

An outdated switchboard isn't just inconvenient when a fuse blows; it's a serious fire hazard. Here are 5 undeniable signs that it's time for an upgrade.

### 1. You Have Old Ceramic Fuses

If you open your switchboard and see old-school rewirable ceramic fuses, you need an upgrade immediately. These outdated fuses were designed for a time when homes used a fraction of the electricity they do today. They offer poor protection against overloads and short circuits, and replacing the fuse wire yourself is incredibly dangerous. Modern switchboards use automatic circuit breakers and safety switches (RCDs) which respond instantly to faults.

### 2. The Lights Flicker When Appliances Turn On

Does your kitchen dim like a haunted house every time the air conditioner or microwave kicks in? This is a classic sign of an overloaded electrical circuit. Older switchboards often group too many outlets onto a single circuit. A switchboard upgrade will allow your electrician to divide the load across new, dedicated circuits, ensuring a steady, safe supply of power.

### 3. Frequent Tripping or Blown Fuses

Circuit breakers are designed to trip to protect you, but if you find yourself constantly trudging out to the switchboard to reset a breaker, something is fundamentally wrong. It means the circuit is consistently drawing more power than it can safely handle. Ignoring this issue can lead to melted wires and electrical fires.

### 4. There Are No Safety Switches (RCDs)

This is a critical safety issue. Safety switches (Residual Current Devices) are designed to monitor the flow of electricity and instantly cut the power if they detect a leakage (like if an appliance malfunctions or someone touches a live wire). They are life-saving devices. If your switchboard only has standard circuit breakers but no RCDs (often marked by a 'Test' button), your home is not compliant with current Australian safety standards.

### 5. Sparks, Buzzing Sounds, or a Burning Smell

This is the most urgent warning sign of all. If you hear a crackling or buzzing sound coming from your switchboard, or if you smell burning plastic, **turn off the main power immediately if it is safe to do so, and call an emergency electrician.** This indicates arcing electricity and melting insulation—a fire is imminent.

### Don't Wait for a Disaster

Upgrading your switchboard is an investment in your family's safety and your property's value. At Sparky Indro, we specialize in seamless, code-compliant switchboard upgrades for older homes. Contact us today for an inspection and peace of mind.
    `
  },
  {
    slug: "cost-outdoor-power-points-brisbane",
    title: "How Much Does It Really Cost to Install Outdoor Power Points in Brisbane?",
    excerpt: "Planning an outdoor entertainment area? Get a realistic breakdown of the costs involved in installing safe, weatherproof outdoor power points in Brisbane.",
    date: "August 05, 2026",
    category: "Advice",
    readTime: "4 min read",
    image: "/blog/outdoor-power.png",
    content: `
## Powering Your Outdoor Lifestyle

Whether you're setting up a new BBQ area, installing festoon lights, or finally adding that outdoor TV, you're going to need power. Running extension cords out the window is not only ugly, but it's also a major safety hazard—especially in unpredictable Brisbane weather.

The solution is installing dedicated, weatherproof outdoor power points. But how much does it actually cost? Let's break it down.

### The Short Answer

On average, for a standard residential installation in Brisbane, you can expect to pay anywhere between **$200 and $450 per outdoor power point**. 

However, that's a wide range. The final cost depends heavily on several key factors.

### Factor 1: Distance from the Switchboard or Existing Circuits

The biggest variable in electrical work is labor and cabling. If you want an outdoor power point installed on a brick wall that is directly opposite an existing indoor power point, the job is relatively quick and cheap. The electrician can simply tap into the existing circuit.

Conversely, if you want a power point down at the far end of your garden, the electrician will need to run a brand new cable all the way from your main switchboard. This requires significantly more labor (potentially digging trenches) and materials.

### Factor 2: Type of Construction

The material of your walls matters. Running cables through a timber-framed, weatherboard home with a raised floor is generally straightforward. 

If you have a double-brick home built on a concrete slab, concealing the cables becomes much more difficult. The electrician may need to drill through masonry or run external conduit, which increases the labor time and cost.

### Factor 3: Weatherproof Ratings (IP Rating)

You cannot use a standard indoor power point outside. Outdoor power points must have a specific Ingress Protection (IP) rating to ensure they are safe from dust and high-pressure water. 

A standard weatherproof point (like an IP53 or IP54) is relatively affordable. However, if the outlet is completely exposed to heavy rain or near a pool area, you may need a higher-rated (and more expensive) enclosure, such as an IP66 rating, which protects against powerful water jets.

### Factor 4: Switchboard Capacity

Does your current switchboard have the capacity to handle the extra load? If your switchboard is already full or outdated, adding new outdoor circuits might require upgrading the switchboard first. Additionally, the new circuit must be protected by a Safety Switch (RCD) to comply with Australian Standards.

### Getting an Accurate Quote

Because every home is different, it's impossible to give a fixed price without seeing the site. A reputable electrician will offer a transparent, itemized quote before starting work. 

**Pro Tip:** If you're having an electrician out to install one outdoor power point, it's significantly cheaper per unit to have them install two or three at the same time, as the bulk of the cost is often the call-out fee and running the initial cable.

Ready to power up your patio? At Sparky Indro, we provide upfront, honest pricing for all outdoor electrical work. Get in touch for a free quote today!
    `
  },
"""

with open('app/blog/blogData.js', 'r') as f:
    content = f.read()

# Insert new posts right after the opening bracket
content = content.replace('export const blogPosts = [', f'export const blogPosts = [\n{new_posts}')

with open('app/blog/blogData.js', 'w') as f:
    f.write(content)
