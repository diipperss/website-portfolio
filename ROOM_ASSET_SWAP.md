# Room Asset Swap Guide

The current `src/assets/3d/room.glb` is not a good fit for a "zoom into the computer screen" intro.

Why:
- The exported scene is made up of generic node names like `Cube001`, `Cube042`, and `Circle004`.
- There is no clearly named monitor or screen mesh to target.
- That makes camera targeting, screen replacement, and screen-only animation much harder than it needs to be.

## What to look for in the replacement asset

Pick a room or workspace model that has:
- A visible monitor, laptop, or screen as a separate object
- A desk or workstation layout
- Reasonable polygon count for web use
- GLB or glTF export support
- A license that allows portfolio use

## Good candidate sources

These looked more promising because they explicitly mention a computer, monitor, desk, or workspace:

- Sketchfab: Isometric Room by NAFI
  - https://sketchfab.com/3d-models/isometric-room-df16d54928924b79a8914e48df451645
- Sketchfab: Low poly Isometric room by JIm
  - https://sketchfab.com/3d-models/low-poly-isometric-room-66e2dbe1c1d244b8839f0ab12af8047e
- Sketchfab: Isometric office by Companion_Cube
  - https://sketchfab.com/3d-models/isometric-office-d31464eed8044190911b221648aca432
- Poly Pizza room search
  - https://poly.pizza/search/room

## Best workflow

1. Download a better room asset with a desk and monitor.
2. Open it in Blender.
3. Rename the important monitor mesh or screen mesh clearly.
   - Example: `Monitor`, `MonitorScreen`, `LaptopScreen`
4. Export to `.glb`.
5. Replace `src/assets/3d/room.glb` or create a new asset file.
6. Update `src/models/room.jsx` to target the named screen object if you want:
   - a camera zoom
   - a screen highlight
   - a texture or HTML overlay aligned to the screen

## Recommended next step

Once a better asset is in place, the cleanest intro sequence would be:

1. Wide room view
2. Slow camera push toward the desk
3. Tight zoom onto the monitor
4. Transition into a 2D resume or portfolio view

That will look much better than trying to force the current anonymous mesh export into that role.
