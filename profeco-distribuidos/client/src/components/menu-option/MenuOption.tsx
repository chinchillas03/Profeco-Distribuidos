export default function MenuOption({ label, state }: { label: string; state: string }) {
    let content = null;
    if (state === "active") {
      content = (
        <button type="button" className="menu-option-btn-active col-12">
          {label}
        </button>
      );
    } else{
        content = (
            <button type="button" className="menu-option-btn-unactive col-12">
              {label}
            </button>
          );  
    }
  
    return <div className="button-container">{content}</div>;
  }