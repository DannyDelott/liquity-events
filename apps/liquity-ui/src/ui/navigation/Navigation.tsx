import { ReactElement } from "react";

export function Navigation(): ReactElement {
  return (
    <div className="daisy-navbar bg-neutral text-neutral-content">
      <div className="daisy-navbar-start">
        <div className="daisy-form-control">
          <input
            type="text"
            placeholder="Search for an address, vault, etc..."
            className="daisy-input daisy-input-bordered w-72 text-black"
          />
        </div>
        <button className="daisy-btn daisy-btn-primary ml-2">Go</button>
      </div>
      <div className="daisy-navbar-center">
        <a className="daisy-btn daisy-btn-ghost normal-case text-xl">
          Liquity Events
        </a>
      </div>
    </div>
  );
}
