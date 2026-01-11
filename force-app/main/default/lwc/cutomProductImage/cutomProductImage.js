import { LightningElement, api } from 'lwc';
import whiteShirt from '@salesforce/resourceUrl/WhiteShirt';
import whiteShirtDummy from '@salesforce/resourceUrl/WhiteShirtDummy';

export default class CutomProductImage extends LightningElement {
    @api recordId;

    whiteShirt = whiteShirt;
    whiteShirtDummy = whiteShirtDummy;

    webImageUrl;

    // 🔹 Color mode toggle
    isGradient = false;

    /* ===============================
       COLOR HANDLERS
    ================================ */
    handleChange(event) {
        const overlay = this.template.querySelector('.color');
        if (overlay) {
            overlay.style.background = event.target.value;
            overlay.style.backgroundImage = 'none';
        }
    }

    handleGradientChange(event) {
        const overlay = this.template.querySelector('.color');
        if (overlay) {
            overlay.style.background = 'none';
            overlay.style.backgroundImage = event.detail.value;
        }
    }

    handleColorTypeChange(event) {
        this.isGradient = event.target.value === 'gradient';
    }

    handleURLChange(event) {
        this.webImageUrl = event.target.value;
    }

    /* ===============================
       DRAG & RESIZE (FIXED)
    ================================ */
    isDragging = false;
    isResizing = false;
    startX;
    startY;
    startTop;
    startLeft;
    startWidth;
    startHeight;
    activeBox;

    startDrag(event) {
        if (event.target.classList.contains('resize-handle')) return;

        this.isDragging = true;
        this.activeBox = event.currentTarget;

        this.startX = event.clientX;
        this.startY = event.clientY;
        this.startTop = this.activeBox.offsetTop;
        this.startLeft = this.activeBox.offsetLeft;

        document.addEventListener('mousemove', this.handleDrag);
        document.addEventListener('mouseup', this.stopActions);
    }

    handleDrag = (event) => {
        if (!this.isDragging) return;

        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        this.activeBox.style.top = `${this.startTop + dy}px`;
        this.activeBox.style.left = `${this.startLeft + dx}px`;
    };

    startResize(event) {
        this.isResizing = true;
        event.stopPropagation();

        this.activeBox = event.currentTarget.parentElement;

        this.startX = event.clientX;
        this.startY = event.clientY;
        this.startWidth = this.activeBox.offsetWidth;
        this.startHeight = this.activeBox.offsetHeight;

        document.addEventListener('mousemove', this.handleResize);
        document.addEventListener('mouseup', this.stopActions);
    }

    handleResize = (event) => {
        if (!this.isResizing) return;

        const dx = event.clientX - this.startX;
        const dy = event.clientY - this.startY;

        this.activeBox.style.width = `${this.startWidth + dx}px`;
        this.activeBox.style.height = `${this.startHeight + dy}px`;
    };

    stopActions = () => {
        this.isDragging = false;
        this.isResizing = false;

        document.removeEventListener('mousemove', this.handleDrag);
        document.removeEventListener('mousemove', this.handleResize);
        document.removeEventListener('mouseup', this.stopActions);
    };
}