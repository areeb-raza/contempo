import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { FormProvider } from './form-provider';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.scss'],
  providers: [{ provide: FormProvider, useExisting: QuoteFormComponent }],
})
export class QuoteFormComponent extends FormProvider implements OnInit {
  public data = [
    {
      id: 1,
      label: 'GENERAL CONDITIONS TOTAL',
      code: '1.00',
      questions: [
        {
          id: 2,
          question: 'Does the Customer want to Change the Floorplan?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 3,
          question: 'Do we need to Remove Walls?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 2,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 4,
          question: 'Wall #1\r\nIs Wall #1 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '19',
          related_question: 3,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 5,
          question: 'Is there a Second Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 4,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 6,
          question: 'Wall #2\r\nIs Wall#2 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '20',
          related_question: 5,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 7,
          question: 'Is there a Third Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 6,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 8,
          question: 'Wall #3\r\nIs Wall#3 a Loading Bearing Wall?',
          has_input: true,
          input_option: 1,
          input_title: '-1',
          related_question: 7,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 9,
          question: 'Is there a Fourth Wall to Remove?',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 8,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 11,
              label: 'None',
            },
          ],
        },
        {
          id: 10,
          question: 'Wall #4\r\nIs Wall#4 a Loading Bearing Wall?*',
          has_input: true,
          input_option: null,
          input_title: '-1',
          related_question: 9,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 2,
      label: 'ELECTRICAL',

      code: '4.00',
      questions: [
        {
          id: 11,
          question: 'Does the customer has a cooktop or a range?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 3,
              label: 'CookTop',
            },
            {
              id: 4,
              label: 'Range',
            },
          ],
        },
        {
          id: 12,
          question: 'What do we need to do with it?\r\n*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 13,
          question: 'Is it Gas or Electric?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 8,
              label: 'Gas',
            },
            {
              id: 9,
              label: 'Electric',
            },
          ],
        },
        {
          id: 14,
          question: 'What Type of Detached oven do they Have?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 10,
              label: 'Single Oven',
            },
            {
              id: 11,
              label: 'None',
            },
            {
              id: 30,
              label: 'Double Oven',
            },
          ],
        },
        {
          id: 15,
          question: 'Gas or Electric?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 8,
              label: 'Gas',
            },
            {
              id: 9,
              label: 'Electric',
            },
          ],
        },
        {
          id: 16,
          question: 'What do we need to do with the Oven(s)?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 17,
          question: 'What do we need to do with the Microwave?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
      ],
    },
    {
      id: 3,
      label: 'PLUMBING',
      code: '5.00',
      questions: [
        {
          id: 18,
          question: 'What do we need to do with the Sink?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 19,
          question: 'What do we need to do with the Potfiller?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
            {
              id: 29,
              label: 'Add a new one',
            },
          ],
        },
        {
          id: 20,
          question: 'Do we need to add any other plumbing Lines?*',
          has_input: true,
          input_option: 1,
          input_title: 'How many plumbing lines?',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 21,
          question: 'Mechanical\r\nWhat do we need to do with the Hood?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 5,
              label: 'Remove&Replace',
            },
            {
              id: 6,
              label: 'Relocate',
            },
            {
              id: 7,
              label: 'Nothing',
            },
            {
              id: 12,
              label: 'Remove',
            },
          ],
        },
        {
          id: 22,
          question: 'Do we need to add any other Vents?*',
          has_input: true,
          input_option: null,
          input_title: 'How Many Vents?*',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 4,
      label: 'FRAMING',
      code: '6.0',
      questions: [],
    },
    {
      id: 5,
      label: 'PAINT',
      code: '10.0',
      questions: [],
    },
    {
      id: 6,
      label: 'FLOORING',
      code: '12.0',
      questions: [
        {
          id: 34,
          question: 'Does the Customer wants to change the floor?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
      ],
    },
    {
      id: 7,
      label: 'STUCCO / SIDING',
      code: '13.0',
      questions: [],
    },
    {
      id: 8,
      label: 'TILES',
      code: '15.0',
      questions: [],
    },
    {
      id: 9,
      label: 'CABINETS',
      code: '18.0',
      questions: [
        {
          id: 23,
          question: 'Wall Cabinets (LnFt)*',
          has_input: true,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 31,
              label: '-1',
            },
          ],
        },
        {
          id: 24,
          question: 'Wall Cabinets New or Refacing?*',
          has_input: true,
          input_option: 14,
          input_title: 'Base Cabinets (LnFt)*',
          related_question: null,
          options: [
            {
              id: 13,
              label: 'New',
            },
            {
              id: 14,
              label: 'Refacing',
            },
          ],
        },
        {
          id: 25,
          question:
            'Island Cabinets\r\nDoes the Customer has or want a kitchen Island?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 11,
              label: 'None',
            },
            {
              id: 15,
              label: 'Yes, he has one',
            },
            {
              id: 16,
              label: 'Yes, We Will Create a new one',
            },
          ],
        },
        {
          id: 26,
          question: 'Does the Island have a sink?*',
          has_input: true,
          input_option: 1,
          input_title: 'Island Cabinets (LnFt)*',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 27,
          question: 'Island Cabinets New or Refacing?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 13,
              label: 'New',
            },
            {
              id: 14,
              label: 'Refacing',
            },
          ],
        },
        {
          id: 28,
          question: 'How many sides for The Island Cabinets?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 17,
              label: '1',
            },
            {
              id: 18,
              label: '2',
            },
          ],
        },
        {
          id: 29,
          question:
            'Counter Tops\r\nWhat type of stone does the customer wants?*',
          has_input: true,
          input_option: 28,
          input_title: 'Please write the specific material?',
          related_question: null,
          options: [
            {
              id: 19,
              label: 'White Grannite',
            },
            {
              id: 20,
              label: 'Various Grannite',
            },
            {
              id: 21,
              label: 'Black Grannite',
            },
            {
              id: 22,
              label: 'Exotic Grannite',
            },
            {
              id: 23,
              label: 'Quartzite/Taj Mahal',
            },
            {
              id: 24,
              label: 'Exotic Quarzite',
            },
            {
              id: 25,
              label: 'Calacatta Quartz',
            },
            {
              id: 26,
              label: 'Pure White Quartz',
            },
            {
              id: 27,
              label: 'Premium Selection',
            },
            {
              id: 28,
              label: 'Other',
            },
          ],
        },
        {
          id: 30,
          question: 'Does the Customer wants Waterfalls in the cabinets?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 31,
          question: 'Does the Cabinets Waterfall will be in one or two sides?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: 30,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 32,
          question:
            'Does the Customer wants Waterfalls in the Kitchen Island?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 1,
              label: 'Yes',
            },
            {
              id: 2,
              label: 'No',
            },
          ],
        },
        {
          id: 33,
          question: 'Does the Island Waterfall will be in one or two sides?*',
          has_input: false,
          input_option: null,
          input_title: '-1',
          related_question: null,
          options: [
            {
              id: 17,
              label: '1',
            },
            {
              id: 18,
              label: '2',
            },
          ],
        },
      ],
    },
    {
      id: 10,
      label: 'COUNTERTOPS',
      code: '19.0',
      questions: [],
    },
    {
      id: 11,
      label: 'DRYWALL',
      code: '20.0',
      questions: [],
    },
  ];

  validateForm!: FormGroup;
  prevButton: boolean = true;
  nextButton: boolean = true;
  questionDefaultValue = '1';
  questions: Array<string> = [];
  isRenderNext: boolean = false;

  fileList: NzUploadFile[] = [];
  quoteForm: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    super();
  }

  ngOnInit(): void {
    // this.quoteForm = new FormGroup({
    //   default: new FormGroup({
    //     fullName: new FormControl(null, Validators.required),
    //     phoneNumber: new FormControl(null, Validators.required),
    //     email: new FormControl(null, Validators.required),
    //     address: new FormControl(null, Validators.required),
    //   }),
    // });

    this.buildFormGroup();

    this.validateForm = this.fb.group({
      fullName: [null, [Validators.required]],
      phoneNumber: [null, [Validators.required]],
      email: [null, [Validators.required]],
      address: [null, [Validators.required]],

      change_floor_plan: [false, [Validators.required]],
      remove_walls: [false, [Validators.required]],
      load_bearing_1: ['', [Validators.required]],
      remove_second_wall: ['', [Validators.required]],
      load_bearing_2: ['', [Validators.required]],
      remove_third_wall: ['', [Validators.required]],
      load_bearing_3: ['', [Validators.required]],
      remove_fourth_wall: ['', [Validators.required]],
      load_bearing_4: ['', [Validators.required]],
      oven_type: ['None', [Validators.required]],
      need_plumbing_lines: [false, [Validators.required]],
      need_other_vents: [false, [Validators.required]],
      material: ['', [Validators.required]],
      need_cabinet_waterfalls: [false, [Validators.required]],
      need_island_waterfalls: [false, [Validators.required]],
      change_floor: [false, [Validators.required]],
      remove_flooring_type: ['', [Validators.required]],
      install_flooring_type: ['', [Validators.required]],
      has_island_cabinet: ['No', [Validators.required]],
    });
  }

  buildFormGroup(): void {
    this.data.forEach((category) => {
      if (!this.quoteForm.controls[category.id]) {
        const group = this.fb.group({});
        const groupKey = 'step_' + category.id;
        if (category.id == 1) {
          group.addControl(
            'salesPerson',
            new FormControl(null, Validators.required)
          );
          group.addControl(
            'fullName',
            new FormControl(null, Validators.required)
          );
          group.addControl(
            'phoneNumber',
            new FormControl(null, Validators.required)
          );
          group.addControl('email', new FormControl(null, Validators.required));
          group.addControl(
            'address',
            new FormControl(null, Validators.required)
          );
        }
        category.questions.forEach((question) => {
          group.addControl(
            question.id.toString(),
            new FormControl(null, Validators.required)
          );
          if (question.has_input) {
            group.addControl(
              question.id.toString() + '_input',
              new FormControl('', Validators.required)
            );
          }
        });
        this.quoteForm.addControl(groupKey, group);
      }
    });
    console.log(this.quoteForm);
  }

  submitForm(): void {
    console.log('submit', this.validateForm.value);
  }

  getControl = (controlName: string) => {
    return this.validateForm.get(controlName);
  };

  getForm(): FormGroup {
    return this.quoteForm;
  }
}
