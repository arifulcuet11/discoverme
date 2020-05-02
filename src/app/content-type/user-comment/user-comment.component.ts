import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/app/share/services/storage/storage.service';
import { CommentService } from 'src/app/share/services/comment/comment.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Params } from '@angular/router';
import { AppConstant } from 'src/app/share/appconstant/appconstant';

@Component({
  selector: 'app-user-comment',
  templateUrl: './user-comment.component.html',
  styleUrls: ['./user-comment.component.scss'],
})
export class UserCommentComponent implements OnInit {
  contentId: number;
  comments: any;
  comentItem: any;
  isEdit = false;
  commentForm = this.fb.group({
    id: [0, [Validators.required]],
    contentId: [0, [Validators.required]],
    description: ['', [Validators.required]],
    commentDateTime: [new Date()],
    commentBy: [0]
    });
  isLogin: any;
  user: any;
  @Input()
  set content(item: AnalyserNode) {
    this.comentItem = item;
  }
  get content() {
    return this.comentItem;
  }
  constructor(private storageService: StorageService,
              private commentService: CommentService,
              private fb: FormBuilder,
              public toastController: ToastController,
              private activeRouter: ActivatedRoute) { }

  ngOnInit() {
    this.activeRouter.params.subscribe((params: Params) => {
      this.isLogin = this.storageService.getItem(this.storageService.IsLogin) === 'false' ? false : true;
      if (this.isLogin) {
        this.user = JSON.parse(this.storageService.getItem(this.storageService.User));
      }
      this.commentForm.patchValue({
        contentId: this.comentItem.id
      });
      this.getAll();
    });
  }

  getAll() {
    this.commentService.getAll(this.comentItem.id).subscribe(res => {
      this.comments = res;
    });
  }

  add() {
    if (!this.isLogin) {
      this.presentToast();
      return 0;
    }
    this.commentService.add(this.commentForm.value).subscribe(res => {
        this.getAll();
        this.commentForm.patchValue({
          description: ''
        });
    });
  }

  update() {
    if (!this.isLogin) {
      this.presentToast();
      return 0;
    }
    this.commentService.update(this.contentId, this.commentForm.value).subscribe(res => {

    });
  }
  delete(item: any) {
     this.commentService.delete(item.id).subscribe(res => {
       this.getAll();
     });
  }
  async presentToast() {
    const toast = await this.toastController.create({
      message: AppConstant.NotLoginMessage,
      duration: 1000,
      color: 'dark'
    });
    toast.present();
  }

}
