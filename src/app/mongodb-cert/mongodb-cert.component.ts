import { Component, ElementRef, OnInit, AfterViewInit, ViewChild, Inject, PLATFORM_ID, signal } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function wrapLabel(label: string): string | string[] {
  if (label.includes(' & ')) {
    return label.split(' & ');
  }
  if (label.includes(' ')) {
    return label.split(' ');
  }
  return label;
}

@Component({
  selector: 'app-mongodb-cert',
  templateUrl: './mongodb-cert.component.html',
  styleUrl: './mongodb-cert.component.scss',
  standalone: false
})
export class MongodbCertComponent implements OnInit, AfterViewInit {
  @ViewChild('weightChart') weightChart!: ElementRef<HTMLCanvasElement>;
  @ViewChild('indexChart') indexChart!: ElementRef<HTMLCanvasElement>;

  tabs = [
    {
      'id': 'tab-create',
      'label': 'Insert'
    },
    {
      'id': 'tab-update',
      'label': 'Update & Upsert'
    },
    {
      'id': 'tab-read',
      'label': 'Read & Query'
    },
    {
      'id': 'tab-agg',
      'label': 'Aggregation'
    }
  ];

  activeTab = signal<string>(this.tabs[0].id);

  state = {
    chartsRendered: false
  };

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initCharts();
    }
  }

  initCharts() {
    if (this.state.chartsRendered) return;

    const weightCanvas = this.weightChart?.nativeElement;
    const indexCanvas = this.indexChart?.nativeElement;

    if (!weightCanvas || !indexCanvas) return;

    const weightCtx = weightCanvas.getContext('2d');
    const indexCtx = indexCanvas.getContext('2d');

    if (!weightCtx || !indexCtx) return;

    const rawWeightLabels = ['CRUD Operations', 'Drivers & Tools', 'Indexes', 'Document Model', 'Data Modeling', 'Atlas & Tools'];
    const wrappedWeightLabels = rawWeightLabels.map(wrapLabel);

    // 1. Weight Chart (Doughnut)
    new Chart(weightCtx, {
      type: 'doughnut',
      data: {
        labels: wrappedWeightLabels,
        datasets: [{
          data: [51, 18, 17, 8, 4, 2],
          backgroundColor: [
            '#0d9488',
            '#4f46e5',
            '#0284c7',
            '#059669',
            '#d97706',
            '#64748b'
          ],
          borderWidth: 0,
          hoverOffset: 10
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        cutout: '70%',
        plugins: {
          legend: {
            position: 'right',
            labels: {
              font: { family: 'Inter', size: 12 },
              color: '#334155',
              padding: 20
            }
          },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: { family: 'Inter', size: 13 },
            bodyFont: { family: 'Inter', size: 14, weight: 'bold' },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              title: function (tooltipItems) {
                const item = tooltipItems[0];
                const label = item.chart.data.labels ? item.chart.data.labels[item.dataIndex] : '';
                if (Array.isArray(label)) {
                  return label.join(' ');
                } else {
                  return label as string;
                }
              }
            }
          }
        }
      }
    });

    // 2. Index Chart (Horizontal Bar Chart)
    new Chart(indexCtx, {
      type: 'bar',
      data: {
        labels: ['COLLSCAN', 'IXSCAN'],
        datasets: [{
          label: 'Execution Time (ms)',
          data: [280, 0.05],
          backgroundColor: ['#ef4444', '#10b981'],
          borderRadius: 6,
          borderWidth: 0,
          barThickness: 25
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(15, 23, 42, 0.9)',
            titleFont: { family: 'var(--font-sans)', size: 13 },
            bodyFont: { family: 'var(--font-sans)', size: 14, weight: 'bold' },
            padding: 12,
            cornerRadius: 8,
            callbacks: {
              label: (context) => ` ${context.parsed.x} ms`
            }
          }
        },
        scales: {
          x: {
            grid: { display: false },
            title: {
              display: true,
              text: 'Time in Milliseconds (lower is better)',
              font: { family: 'var(--font-sans)', size: 11 },
              color: '#64748b'
            },
            ticks: {
              color: '#64748b'
            }
          },
          y: {
            grid: { display: false },
            ticks: {
              font: { family: 'var(--font-sans)', size: 12, weight: 'bold' },
              color: '#334155'
            }
          }
        }
      }
    });

    this.state.chartsRendered = true;
  }

  selectTab(index: string): void {
    this.activeTab.set(index);
  }
}