import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface CatalogueItem {
  name: string;
  category: string;
  fabric: string;
  image: string;
  description: string;
}

interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  readonly whatsappNumber = '919549537163';
  readonly primaryPhone = '9549537163';
  readonly secondaryPhone = '9929457246';
  readonly email = 'vedicvastram.india@gmail.com';
  readonly instagramUrl = 'https://www.instagram.com/vedic.vastram?igsh=aXZ3YjllbWdwa2h1';
  readonly address = 'Shikarpura, Sanganer, Jaipur';

  readonly filters = ['All', 'Screen Print', 'Cotton', 'Rayon', 'Custom Print'];
  activeFilter = 'All';
  zoomedImage: GalleryImage | null = null;
  isMobileMenuOpen = false;

  readonly catalogue: CatalogueItem[] = [
    {
      name: 'Sanganeri Floral Border Print',
      category: 'Screen Print',
      fabric: 'Cotton',
      image: 'assets/green-fabric-closeup.jpeg',
      description: 'Fine floral repeats with a detailed border layout for suits, dress material, and apparel lines.'
    },
    {
      name: 'Deep Green Printed Yardage',
      category: 'Screen Print',
      fabric: 'Rayon',
      image: 'assets/finished-green-fabric.jpeg',
      description: 'Flowing printed fabric with crisp motifs, suitable for wholesale apparel and boutique collections.'
    },
    {
      name: 'Bright Floral Fashion Fabric',
      category: 'Custom Print',
      fabric: 'Rayon',
      image: 'assets/floral-yellow-fabric.jpeg',
      description: 'Vibrant custom floral runs for fashion brands, retailers, and seasonal collections.'
    },
    {
      name: 'Manual Screen Printing Work',
      category: 'Screen Print',
      fabric: 'Cotton',
      image: 'assets/manual-screen-printing.jpeg',
      description: 'Hands-on printing support for controlled impressions, sampling, and smaller custom requirements.'
    }
  ];

  readonly gallery: GalleryImage[] = [

    {
      src: 'assets/dyeing.jpeg',
      alt: 'Textile dyeing machine in the Vedic Vastram workshop',
      title: 'Fabric dyeing'
    },
    {
      src: 'assets/outdoor-fabric-drying.jpeg',
      alt: 'White fabric drying after textile processing',
      title: 'Fabric drying'
    },
    {
      src: 'assets/fabric-inspection-station.jpeg',
      alt: 'Fabric inspection and folding station',
      title: 'Batching'
    },
    {
      src: 'assets/fabric-processing-roll.jpeg',
      alt: 'Fabric roll processing in the Vedic Vastram factory',
      title: 'Roll processing'
    },
    {
      src: 'assets/screen-printing-line.jpeg',
      alt: 'Long screen printing line at Vedic Vastram in Sanganer Jaipur',
      title: 'Printing line'
    },
    {
      src: 'assets/printing-machine-detail.jpeg',
      alt: 'Screen printing machinery producing detailed textile patterns',
      title: 'Pattern precision'
    },
    {
      src: 'assets/continuous-print-run.jpeg',
      alt: 'Continuous fabric print run with green Sanganeri pattern',
      title: 'Continuous runs'
    },




  ];

  readonly capabilities = [
    'Sanganeri-inspired textile printing',
    'Screen printing for repeat orders',
    'Cotton, rayon, blends, and custom bases',
    'Wholesale, retail, exporter, and brand supply',
    'Sampling support and bulk production',
    'Factory-direct coordination from Sanganer'
  ];

  get filteredCatalogue(): CatalogueItem[] {
    if (this.activeFilter === 'All') {
      return this.catalogue;
    }

    return this.catalogue.filter((item) =>
      [item.category, item.fabric].some((value) => value.includes(this.activeFilter))
    );
  }

  get whatsappUrl(): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      'Hello Vedic Vastram, I would like to get a quote for printed fabric.'
    )}`;
  }

  quoteUrl(item: CatalogueItem): string {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(
      `Hello Vedic Vastram, please share a quote for ${item.name}.`
    )}`;
  }

  setFilter(filter: string): void {
    this.activeFilter = filter;
  }

  openZoom(image: GalleryImage): void {
    this.zoomedImage = image;
  }

  openCatalogueZoom(item: CatalogueItem): void {
    this.zoomedImage = {
      src: item.image,
      alt: item.name,
      title: item.name
    };
  }

  closeZoom(): void {
    this.zoomedImage = null;
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu(): void {
    this.isMobileMenuOpen = false;
  }
}
