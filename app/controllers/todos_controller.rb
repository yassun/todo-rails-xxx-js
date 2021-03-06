class TodosController < ApplicationController
  before_action :set_todo, only: [:show, :update, :destroy]

  # GET /todos
  def index
    @todos = Todo.all

    render json: @todos.map { |todo| TodoSerializer.new(todo)}
  end

  # GET /todos/1
  def show
    render json: TodoSerializer.new(@todo)
  end

  # POST /todos
  def create
    @todo = Todo.new(todo_params)

    if Todo.count < 100 && @todo.save
      render json: @todo, status: :created, location: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /todos/1
  def update
    if @todo.update(todo_params)
      render json: @todo
    else
      render json: @todo.errors, status: :unprocessable_entity
    end
  end

  # DELETE /todos/1
  def destroy
    @todo.destroy
  end

  private
    def set_todo
      @todo = Todo.find(params[:id])
    end

    def todo_params
      params.permit(:title, :description)
    end
end
