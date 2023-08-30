import "../app/Drawer.css";

const Drawer = () => {
  return (
    <div className="chest">
      <div className="chest__panel chest__panel--back" />
      <div className="chest__panel chest__panel--top" />
      <div className="chest__panel chest__panel--bottom" />
      <div className="chest__panel chest__panel--right" />
      <div className="chest__panel chest__panel--front">
        <div className="chest__panel chest__panel--front-frame" />
      </div>
      <div className="chest__panel chest__panel--left" />
      <div className="chest__drawer drawer" data-position={1}>
        <details>
          <summary />
        </details>
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back">
            <span>HAPPY</span>
          </div>
          <div className="drawer__panel drawer__panel--bottom" />
          <div className="drawer__panel drawer__panel--right" />
          <div className="drawer__panel drawer__panel--left" />
          <div className="drawer__panel drawer__panel--front" />
        </div>
      </div>
      <div className="chest__drawer drawer" data-position={2}>
        <details>
          <summary />
        </details>
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back">
            <span>BIRTHDAY</span>
          </div>
          <div className="drawer__panel drawer__panel--bottom" />
          <div className="drawer__panel drawer__panel--right" />
          <div className="drawer__panel drawer__panel--left" />
          <div className="drawer__panel drawer__panel--front" />
        </div>
      </div>
      <div className="chest__drawer drawer" data-position={3}>
        <details>
          <summary />
        </details>
        <div className="drawer__structure">
          <div className="drawer__panel drawer__panel--back">
            <span className="letter">T</span>
            <span className="letter">E</span>
            <span className="letter">D</span>
            <span className="letter">D</span>
            <span className="letter">U</span>
          </div>
          <div className="drawer__panel drawer__panel--bottom" />
          <div className="drawer__panel drawer__panel--right" />
          <div className="drawer__panel drawer__panel--left" />
          <div className="drawer__panel drawer__panel--front" />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
